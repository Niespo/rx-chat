export interface ChatMessage {
  text: string;
  timestamp: { seconds: number };
}

export interface ChatMessageResponse extends ChatMessage {
  id: string;
}
