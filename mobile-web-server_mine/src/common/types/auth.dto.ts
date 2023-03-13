export interface AuthDto {
    token_type?:    string;
    access_token?:  string;
    expires_in?:    number;
    refresh_token?: string;
    message?: string; //오류 발생시 들어가는 메시지
}
