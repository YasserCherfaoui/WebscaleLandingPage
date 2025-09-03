// Podcast landing page types
export interface PodcastFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  industry: string;
  employeesCount: string;
  experience: string;
  interests: string[];
  agreeToTerms: boolean;
  timestamp?: string;
  source?: string;
}

export interface PodcastFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface PodcastStats {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
}

// Google Sheets configuration
export interface GoogleSheetsConfig {
  sheetId: string;
  apiKey: string;
  appsScriptUrl?: string;
}

// Environment variables interface
export interface EnvironmentVariables {
  GOOGLE_SHEET_ID: string;
  GOOGLE_API_KEY: string;
  GOOGLE_APPS_SCRIPT_URL?: string;
  PLATFORM_URL: string;
}
