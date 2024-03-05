import { IsOptional, IsString } from 'class-validator';

export class ZohoDeskTriggerGameActionDTO {
  @IsString()
  public userId: string;
  @IsString()
  public userName: string;
  @IsString()
  public appId: string;
  @IsString()
  public gameActionId: string;
  @IsString()
  @IsOptional()
  public correspondingUserId: string;
  @IsString()
  @IsOptional()
  public correspondingUserApplicationId?: string;
}
