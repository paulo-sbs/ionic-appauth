import { IAuthAction } from './auth-action';
import { TokenResponse } from '@openid/appauth';

export enum AuthActions {
    SignInSuccess = "Sign In Success",
    SignInFailed = "Sign In Failed",
    SignOutSuccess = "Sign Out Success",
    SignOutFailed = "Sign Out Failed",
    RefreshSuccess = "Refresh Success",
    RefreshFailed = "Refesh Failed",
    AutoSignInFailed = "Auto Sign In Success",
    AuthSignInSuccess = "Auto Sign In Failed",
}

export interface IAuthAction {
    action : AuthActions,
    tokenResponse ?: TokenResponse
}

export class AuthActionBuilder {
    public static SignOutSuccess() : IAuthAction{
        return {
            action : AuthActions.SignOutSuccess,
        }
    }

    public static SignOutFailed() : IAuthAction{
        return {
            action : AuthActions.SignOutFailed,
        }
    }

    public static RefreshSuccess(token : TokenResponse) : IAuthAction{
        return {
            action : AuthActions.RefreshSuccess,
            tokenResponse : token
        }
    }

    public static RefreshFailed() : IAuthAction{
        return {
            action : AuthActions.RefreshFailed
        }
    }

    public static SignInSuccess(token : TokenResponse) : IAuthAction{
        return {
            action : AuthActions.SignInSuccess,
            tokenResponse : token
        }
    }

    public static SignInFailed() : IAuthAction{
        return {
            action : AuthActions.AutoSignInFailed
        }
    }

    public static AutoSignInSuccess(token : TokenResponse) : IAuthAction{
        return {
            action : AuthActions.AuthSignInSuccess,
            tokenResponse : token
        }
    }

    public static AutoSignInFailed() : IAuthAction{
        return {
            action : AuthActions.AutoSignInFailed,
        }
    }
}
