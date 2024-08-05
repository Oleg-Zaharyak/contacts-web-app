export interface ContactsList {
  resources: Contact[];
}

export interface Contact {
  id: string;
  record_type: string;
  fields: Fields;
  owner_id: any;
  children: any[];
  employers_info: any[];
  updated: string;
  created: string;
  updater: any;
  creator: string;
  avatar_url: string;
  tags: any[];
  last_contacted: LastContacted;
  company_last_contacted: {
    in: any;
    out: any;
  };
  last_contacted_user: any;
  lc: any;
  is_important: any;
  notice: any;
  reminders: any;
  reminder: any;
  creator_id: string;
  privacy: {
    read: any;
    edit: any;
  };
  is_editable: boolean;
  stages_info: {};
  files: any;
  contexts: {
    context_key: string;
    context?: any[];
  }[];
  object_type: string;
  tags2: any[];
}

export interface Fields {
  "discovered gender"?: DiscoveredGender[];
  email: Email[];
  "first name"?: FirstName[];
  "last name"?: LastName[];
  "discovered related address"?: Address[];
}

export interface DiscoveredGender {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface Email {
  label: string;
  modifier?: string;
  value: string;
  is_primary?: boolean;
}

export interface FirstName {
  label: string;
  modifier?: string;
  value: string;
  is_primary?: boolean;
}

export interface LastName {
  label: string;
  modifier?: string;
  value: string;
  is_primary?: boolean;
}

export interface Address {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface LastContacted {
  tstamp: any;
  type: any;
  object_id: any;
  user_id: any;
  deletion_tstamp: any;
}

export interface DeleteContact {
  status: string;
  data: {
    ids: string[];
  };
}
