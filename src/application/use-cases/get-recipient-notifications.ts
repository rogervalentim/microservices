import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  static execute(arg0: {
    content: string;
    category: string;
    recipientId: string;
  }) {
    throw new Error('Method not implemented.');
  }
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
