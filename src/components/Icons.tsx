
import { LucideProps } from "lucide-react";
import { 
  User, 
  BedDouble, 
  BedSingle, 
  Calendar, 
  Clock,
  Edit, 
  Trash,
  Plus,
  Search,
  CheckCircle,
  XCircle,
  Shield,
  Sparkles,
  ArrowRight,
  Filter
} from "lucide-react";

export const GuestIcon = (props: LucideProps) => <User {...props} />;
export const BedDoubleIcon = (props: LucideProps) => <BedDouble {...props} />;
export const BedSingleIcon = (props: LucideProps) => <BedSingle {...props} />;
export const CalendarIcon = (props: LucideProps) => <Calendar {...props} />;
export const ClockIcon = (props: LucideProps) => <Clock {...props} />;
export const EditIcon = (props: LucideProps) => <Edit {...props} />;
export const DeleteIcon = (props: LucideProps) => <Trash {...props} />;
export const AddIcon = (props: LucideProps) => <Plus {...props} />;
export const SearchIcon = (props: LucideProps) => <Search {...props} />;
export const SuccessIcon = (props: LucideProps) => <CheckCircle {...props} />;
export const ErrorIcon = (props: LucideProps) => <XCircle {...props} />;
export const ShieldIcon = (props: LucideProps) => <Shield {...props} />;
export const PremiumIcon = (props: LucideProps) => <Sparkles {...props} />;
export const ArrowRightIcon = (props: LucideProps) => <ArrowRight {...props} />;
export const FilterIcon = (props: LucideProps) => <Filter {...props} />;
