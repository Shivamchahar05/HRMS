import { Validators } from "@angular/forms"

export class validation {
    public static INPUT_REQUIRED = Validators.required
    public static EMAIL = {
        EMAIL_PATTERN: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'),
        EMAIL_email: Validators.email
    }

    public static PASSWORD = {
        PASSWORD_LENGTH: Validators.minLength(6),
        PASSWORD_PATTERN: Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{6,}$')
    }
}
