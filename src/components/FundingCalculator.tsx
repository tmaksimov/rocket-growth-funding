
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CalculatorProps {
  openContactForm: () => void;
}

const FundingCalculator: React.FC<CalculatorProps> = ({ openContactForm }) => {
  const [amount, setAmount] = useState<string>("10000");
  const [payoutDelay, setPayoutDelay] = useState<number>(30);
  const [advanceRate, setAdvanceRate] = useState<number>(85);
  const [factoringFee, setFactoringFee] = useState<number>(0);
  const [advancePayment, setAdvancePayment] = useState<number>(0);

  // Calculate the fees and advance payment
  useEffect(() => {
    const amountNum = parseFloat(amount.replace(/,/g, '')) || 0;
    
    // Calculate factoring fee based on payout delay
    let fee = 0;
    if (payoutDelay === 30) {
      fee = amountNum * 0.04;
    } else if (payoutDelay === 45) {
      fee = amountNum * 0.06;
    } else if (payoutDelay === 60) {
      fee = amountNum * 0.08;
    }
    
    // Calculate advance rate based on amount
    let rate = 85;
    if (amountNum > 50000) {
      rate = 87;
    }
    if (amountNum > 100000) {
      rate = 90;
    }
    
    setAdvanceRate(rate);
    setFactoringFee(fee);
    setAdvancePayment((amountNum * rate / 100) - fee);
  }, [amount, payoutDelay]);

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  // Handle input change with formatting
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters and format with commas
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
      <div className="bg-gradient-to-r from-rocket-50 to-mint-50 rounded-3xl p-6 md:p-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-rocket-600 text-white rounded-full px-4 py-1 text-sm font-medium mb-4">
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
            <CardTitle className="text-2xl">Get your receivables funded</CardTitle>
            <CardDescription>
              Calculate your advance payment based on your receivables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input 
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    className="pl-8"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Expected payout delay</Label>
                <Tabs defaultValue="30" onValueChange={(value) => setPayoutDelay(parseInt(value))}>
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="30">30 days</TabsTrigger>
                    <TabsTrigger value="45">45 days</TabsTrigger>
                    <TabsTrigger value="60">60 days</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="border-t border-gray-200 my-4 pt-4">
                <h4 className="font-medium text-lg mb-4">Your funding details:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Receivable amount:</span>
                    <span className="font-semibold">${amount || '0'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Advance rate:</span>
                    <span className="font-semibold">{advanceRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Factoring fee:</span>
                    <span className="font-semibold">${formatNumber(factoringFee)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Advance payment:</span>
                    <span className="text-rocket-700">${formatNumber(advancePayment)}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={openContactForm}
                className="w-full bg-mint-500 hover:bg-mint-600 text-white"
              >
                Get Funded Now
              </Button>
              
              <div className="text-center">
                <a href="#" className="text-rocket-600 hover:text-rocket-800 text-sm underline">
                  Compare with your current offer
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FundingCalculator;
