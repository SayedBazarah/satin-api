// ----------------------------------------------------------------------

import { ObjectId, Schema, model } from "mongoose";

export type IKanbanComment = {
  id: string;
  name: string;
  message: string;
  avatarUrl: string;
  messageType: "image" | "text";
  createdAt: Date;
};

export type IKanbanAssignee = {
  id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  address: string;
  avatarUrl: string;
  phoneNumber: string;
  lastActivity: Date;
};

export type IKanbanLead = {
  id: ObjectId;
  name: string;
  status: string;
  phone: string;
  priority: string;
  labels: string[];
  description?: string;
  attachments: string[];
  comments: IKanbanComment[];
  assignee: IKanbanAssignee[];
  due: [Date | null, Date | null];
  reporter?: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  project?: {
    id: string;
    title: string;
  };
  unit?: {
    id: string;
    title: string;
  };
  stage: "Call Ceneter" | "Sales";
  email: string;
  source: string;
  revenue?: number;
  budget?: number;
  campaign?: {
    id: string;
    title: string;
  };
};

export type IKanbanColumn = {
  id: string;
  name: string;
  value: number;
  taskIds: string[];
};

export type IKanban = {
  leads: Record<string, IKanbanLead>;
  columns: Record<string, IKanbanColumn>;
  ordered: string[];
};

// ----------------------------------------------------------------------

export const LeadSchema = new Schema<IKanbanLead>(
  {},
  { timestamps: true, collection: "lead" }
);

LeadSchema.index({ createdAt: 1, updatedAt: -1 });

export const Employee = model<IKanbanLead>("lead", LeadSchema);
