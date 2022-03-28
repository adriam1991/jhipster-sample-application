import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { IVideo } from 'app/shared/model/video.model';

export interface IRating {
  id?: number;
  rating?: number | null;
  date?: string | null;
  user?: IUser | null;
  user?: IVideo | null;
}

export const defaultValue: Readonly<IRating> = {};
