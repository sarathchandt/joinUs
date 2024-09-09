import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RegisterParamList = {
  login: undefined;
  otp: {
    email: string;
  };
};

export type RegisterScreenProps<T extends keyof RegisterParamList> =
  StackScreenProps<RegisterParamList, T>;
