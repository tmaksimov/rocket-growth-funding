
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CalculatorProps {
  openContactForm: () => void;
}

const FundingCalculator: React.FC<CalculatorProps> = ({ openContactForm }) => {
  const [amount, setAmount] = useState<string>("10000");
  const [paymentSchedule, setPaymentSchedule] = useState<any[]>([]);
  const [totalFactoringFee, setTotalFactoringFee] = useState<number>(0);
  const [cashCost, setCashCost] = useState<number>(0);

  // Calculate payments based on new logic
  useEffect(() => {
    const amountNum = parseFloat(amount.replace(/,/g, '')) || 0;
    
    // Fixed term of 3 months and monthly factoring fee of 1.85%
    const monthlyFactoringFee = 0.0185;
    const termMonths = 3;
    
    // Calculate payment schedule
    const schedule = [];
    let totalFee = 0;
    const startDate = new Date(2025, 0, 1); // January 1, 2025
    
    // Initial financing: amount is advanced on January 1
    // Repayment schedule:
    // 50% after 1 month (February 1)
    // 25% after 2 months (March 1)
    // 25% after 3 months (April 1)
    
    const paymentPercentages = [0.5, 0.25, 0.25];
    let remainingAmount = amountNum;
    
    for (let i = 0; i < termMonths; i++) {
      const paymentDate = new Date(startDate);
      paymentDate.setMonth(paymentDate.getMonth() + i + 1);
      
      const paymentAmount = amountNum * paymentPercentages[i];
      remainingAmount -= paymentAmount;
      
      // Calculate factoring fee based on the outstanding amount for this period
      const feeAmount = amountNum * (i === 0 ? 1 : (1 - paymentPercentages.slice(0, i).reduce((a, b) => a + b, 0))) * monthlyFactoringFee;
      totalFee += feeAmount;
      
      schedule.push({
        date: paymentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        amount: paymentAmount,
        percentage: paymentPercentages[i] * 100,
        factoring_fee: feeAmount
      });
    }
    
    // Calculate cash cost percentage
    const cashCostPercent = (totalFee / amountNum) * 100;
    
    setPaymentSchedule(schedule);
    setTotalFactoringFee(totalFee);
    setCashCost(cashCostPercent);
  }, [amount]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value) {
      const formatted = parseInt(value).toLocaleString('en-US');
      setAmount(formatted);
    } else {
      setAmount('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-3xl p-6 md:p-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-medium mb-4">
            GET YOUR RECEIVABLES FUNDED
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Draw funds from your store receivables
          </h2>
          <p className="text-gray-600 text-lg">
            Instant liquidity for scaling marketing and bridging payout gaps.
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate your funding</CardTitle>
            <CardDescription>
              See how our 3-month funding solution can work for your business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="calculator-amount">Amount to be financed</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input 
                    id="calculator-amount"
                    value={amount}
                    onChange={handleAmountChange}
                    className="pl-8"
                  />
                </div>
                <p className="text-sm text-gray-500">Term: 3 months</p>
              </div>
              
              <div className="border-t border-gray-200 my-4 pt-4">
                <h4 className="font-medium text-lg mb-4">Payment Schedule:</h4>
                <div className="space-y-3">
                  {paymentSchedule.map((payment, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{payment.date}</div>
                      </div>
                      <div className="font-semibold">${formatNumber(payment.amount)}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Total Factoring Fee:</span>
                    <span className="font-bold">${formatNumber(totalFactoringFee)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Cash Cost:</span>
                    <span className="font-bold">{formatNumber(cashCost)}%</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={openContactForm}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Get Funded Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FundingCalculator;
