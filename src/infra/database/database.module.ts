import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.services';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
