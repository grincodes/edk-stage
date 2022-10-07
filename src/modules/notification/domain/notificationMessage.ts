export interface MsgProps {
  [index: string]: any
}

export interface INotificationMessage {
  getMessage(msgProps?: MsgProps): string
}
