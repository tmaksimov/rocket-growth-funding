
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

interface QualifyProps {
  openContactForm: () => void;
}

const QualifySection: React.FC<QualifyProps> = ({
  openContactForm
}) => {
  const requirements = ["Revenue from $30K/month", "Minimum 6 months of operations", "Available receivables in any platform"];
  const platforms = [{
    name: "Apple App Store",
    logo: "apple"
  }, {
    name: "Google Play",
    logo: "google-play"
  }, {
    name: "Unity Ads",
    logo: "unity"
  }, {
    name: "Meta",
    logo: "meta"
  }, {
    name: "AppLovin",
    logo: "applovin"
  }];

  // State for calculator
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

  return <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Can Apply?</h2>
            
            <div className="space-y-4 mb-8">
              {requirements.map((req, index) => <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 mr-3 mt-1 bg-mint-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-mint-600" />
                  </span>
                  <span className="text-lg">{req}</span>
                </div>)}
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Supported Platforms:</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Apple App Store", logo: "apple-logo.png" },
                  { name: "Google Play", logo: "google-play-logo.png" },
                  { name: "Unity Ads", logo: "unity-logo.png" },
                  { name: "Meta", logo: "meta-logo.png" },
                  { name: "AppLovin", logo: "applovin-logo.png" }
                ].map((platform, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <img 
                      src={`/lovable-uploads/${index === 0 ? 'c4b14dd6-3767-4d5d-a76e-f1e5ab9f13ea.png' : 
                            index === 1 ? 'b71f6c35-0ac6-478b-a1cf-f201557f4835.png' :
                            index === 2 ? 'a709a3d7-c17a-4f8d-a2a7-487818570e71.png' :
                            index === 3 ? 'cddd8f16-1b5c-453e-b7d1-9aa0419fcdbf.png' :
                            '99236149-0922-4353-b2a8-48108bedf6e2.png'}`} 
                      alt={platform.name}
                      className="w-6 h-6 object-contain mr-2"
                    />
                    <span className="text-sm font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="mb-6">
              <div className="inline-block bg-mint-100 text-mint-700 rounded-full px-4 py-1 text-sm font-medium mb-4">
                FUNDING CALCULATOR
              </div>
              <h3 className="text-2xl font-bold mb-2">Calculate your funding</h3>
              <p className="text-gray-600 mb-6">
                See how our 3-month funding solution can work for your business
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount to be financed</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input 
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    className="pl-8"
                  />
                </div>
                <p className="text-sm text-gray-500">Term: 3 months</p>
              </div>
              
              <Card className="bg-gray-50 border-none">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-4">Payment Schedule:</h4>
                  <div className="space-y-3">
                    {paymentSchedule.map((payment, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{payment.date}</div>
                          <div className="text-sm text-gray-500">{payment.percentage}% of principal</div>
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
                </CardContent>
              </Card>
              
              <Button onClick={openContactForm} className="w-full bg-mint-500 hover:bg-mint-600 text-white">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default QualifySection;
