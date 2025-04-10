
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Room } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GuestIcon, CalendarIcon, ClockIcon } from "@/components/Icons";

interface BookingFormProps {
  room: Room;
  onSuccess?: () => void;
}

const BookingForm = ({ room, onSuccess }: BookingFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    maritalStatus: "",
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    numberOfRooms: 1,
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields validation
    const requiredFields = [
      "fullName", "email", "phone", "age", "maritalStatus", 
      "checkInDate", "checkInTime", "checkOutDate", "checkOutTime"
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = "This field is required";
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Age validation
    if (formData.age) {
      const age = parseInt(formData.age, 10);
      if (isNaN(age)) {
        newErrors.age = "Please enter a valid age";
      } else if (age <= 18) {
        newErrors.age = "You must be over 18 years old to book a room";
      }
    }
    
    // Marital status validation for room type
    if (formData.maritalStatus && room.type) {
      if (room.type === "single" && formData.maritalStatus === "married") {
        newErrors.maritalStatus = "Single cart rooms are only for unmarried guests";
      } else if (room.type === "double" && formData.maritalStatus === "unmarried") {
        newErrors.maritalStatus = "Double cart rooms are only for married guests";
      }
    }
    
    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Booking Successful!",
          description: `Your ${room.type} cart ${room.category} room has been booked.`,
          variant: "default",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          age: "",
          maritalStatus: "",
          checkInDate: "",
          checkInTime: "",
          checkOutDate: "",
          checkOutTime: "",
          numberOfRooms: 1,
          agreeToTerms: false
        });
        
        if (onSuccess) {
          onSuccess();
        }
      }, 1500);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className={errors.fullName ? "border-destructive" : ""}
            />
            {errors.fullName && <p className="text-destructive text-sm">{errors.fullName}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              min="1"
              max="120"
              value={formData.age}
              onChange={handleChange}
              placeholder="25"
              className={errors.age ? "border-destructive" : ""}
            />
            {errors.age && <p className="text-destructive text-sm">{errors.age}</p>}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Marital Status</Label>
          <RadioGroup 
            value={formData.maritalStatus} 
            onValueChange={(value) => handleSelectChange("maritalStatus", value)}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unmarried" id="unmarried" />
              <Label htmlFor="unmarried" className="cursor-pointer">Unmarried</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="married" id="married" />
              <Label htmlFor="married" className="cursor-pointer">Married</Label>
            </div>
          </RadioGroup>
          {errors.maritalStatus && <p className="text-destructive text-sm">{errors.maritalStatus}</p>}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Booking Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="checkInDate">Check-in Date</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkInDate"
                name="checkInDate"
                type="date"
                value={formData.checkInDate}
                onChange={handleChange}
                className={`pl-10 ${errors.checkInDate ? "border-destructive" : ""}`}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            {errors.checkInDate && <p className="text-destructive text-sm">{errors.checkInDate}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="checkInTime">Check-in Time</Label>
            <div className="relative">
              <ClockIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkInTime"
                name="checkInTime"
                type="time"
                value={formData.checkInTime}
                onChange={handleChange}
                className={`pl-10 ${errors.checkInTime ? "border-destructive" : ""}`}
              />
            </div>
            {errors.checkInTime && <p className="text-destructive text-sm">{errors.checkInTime}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="checkOutDate">Check-out Date</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkOutDate"
                name="checkOutDate"
                type="date"
                value={formData.checkOutDate}
                onChange={handleChange}
                className={`pl-10 ${errors.checkOutDate ? "border-destructive" : ""}`}
                min={formData.checkInDate || new Date().toISOString().split('T')[0]}
              />
            </div>
            {errors.checkOutDate && <p className="text-destructive text-sm">{errors.checkOutDate}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="checkOutTime">Check-out Time</Label>
            <div className="relative">
              <ClockIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkOutTime"
                name="checkOutTime"
                type="time"
                value={formData.checkOutTime}
                onChange={handleChange}
                className={`pl-10 ${errors.checkOutTime ? "border-destructive" : ""}`}
              />
            </div>
            {errors.checkOutTime && <p className="text-destructive text-sm">{errors.checkOutTime}</p>}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="numberOfRooms">Number of Rooms</Label>
          <Select 
            value={formData.numberOfRooms.toString()} 
            onValueChange={(value) => handleSelectChange("numberOfRooms", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select number of rooms" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(Math.min(room.availableRooms, 5))].map((_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1} {i === 0 ? "room" : "rooms"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="pt-2">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="agreeToTerms" 
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => 
              handleSelectChange("agreeToTerms", checked ? "true" : "")
            }
          />
          <Label 
            htmlFor="agreeToTerms" 
            className="text-sm cursor-pointer"
          >
            I agree to the terms and conditions
          </Label>
        </div>
        {errors.agreeToTerms && <p className="text-destructive text-sm mt-1">{errors.agreeToTerms}</p>}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Total Cost:</p>
          <p className="text-2xl font-bold text-lag-800">
            ${room.price * formData.numberOfRooms}
            <span className="text-sm font-normal text-muted-foreground"> / night</span>
          </p>
        </div>
        
        <Button type="submit" disabled={isSubmitting} className="px-8">
          {isSubmitting ? "Processing..." : "Book Now"}
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
