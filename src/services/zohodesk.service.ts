import { TriggerGameAction } from '@/interfaces/triggerGameAction.interface';
import { AxiosClient } from '../http/axiosClient';
import { CONFIG } from '@/environment/environment.appSettings';
import { User } from '@/interfaces/user.interface';
import { ZohoDeskGameActionTrigger } from '@/interfaces/zohoDeskGameActionTrigger.interface';

export class ZohoDeskService {
  private axiosClient = new AxiosClient({ 'api-key': CONFIG.ZOHO_DESK_API_KEY });

  private async triggerGameAction(gameAction: TriggerGameAction) {
    try {
      const response = await this.axiosClient.post('/userCompletedGame/triggerGameAction', gameAction);
      return response.data;
    } catch (error) {
      throw new Error(`Error triggering game action: ${error}`);
    }
  }

  private async createUser(user: User) {
    try {
      const response = await this.axiosClient.post('v1/users/addUser', user);
      return response.data;
    } catch (error) {
      if (error.status === 409) {
        console.log('User already exists:', user.userId);
      } else {
        throw new Error(`Error creating user: ${error.message}`);
      }
    }
  }

  public async createUserAndTriggerGameActionAsync(zohoDeskGame: ZohoDeskGameActionTrigger) {
    try {
      const user: User = {
        userId: zohoDeskGame.userId,
        userName: zohoDeskGame.userName,
        customAttributes: {
          Role: ['Employee'],
        },
        application: zohoDeskGame.appId,
      };

      await this.createUser(user);

      const gameAction: TriggerGameAction = {
        gameActionId: zohoDeskGame.gameActionId,
        userId: zohoDeskGame.userId,
        correspondingUserId: '',
        correspondingUserApplicationId: '',
      };
      const response = await this.triggerGameAction(gameAction);
      return response;
    } catch (error) {
      console.error('Error in createUserAndTriggerGameActionAsync:', error.message);
      return error;
    }
  }
}
