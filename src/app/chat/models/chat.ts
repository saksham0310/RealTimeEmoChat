export interface ChatRoom {
    id: string;
    name: string;
    description?: string;  
    createdAt: Date;       
    createdBy: string|null;
    users:string[];
}