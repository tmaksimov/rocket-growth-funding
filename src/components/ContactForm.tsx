
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would submit the form data to your backend
    alert("Form submitted! We'll be in touch soon.");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get Funded!!!</DialogTitle>
          <DialogDescription>
            Tell us about your app or game and we'll get back to you with funding options.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Jane Smith" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jane@example.com" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="app-name">App/Game Name & Link</Label>
            <Input id="app-name" placeholder="My Awesome App - https://example.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="revenue">Last Month Revenue</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select revenue range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30k-50k">$30K - $50K</SelectItem>
                <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                <SelectItem value="500k+">$500K+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="requirements">Tell us about your requirements</Label>
            <Textarea 
              id="requirements" 
              placeholder="What are you looking to fund? How much capital do you need? What's your timeline?" 
              className="min-h-[100px]"
            />
          </div>
          
          <Button type="submit" className="w-full bg-rocket-600 hover:bg-rocket-700 text-white">
            Schedule a Call
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
