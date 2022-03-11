// ^[a-zA-Z1-9 ]*$
// ^[0-9A-Za-z.!@?#"$%&:;() *+,/;-=[\\]^_{|}<>\u0400-\u04FF]*$
export const enum regexString {
	IS_VALID_STRING = '^[0-9A-Za-z.!@?#"$%&:;() *+,/;-=[\\]^_{|}<>\u0400-\u04FF]*$',
	IS_STRING_VALID_SHORT = '^(?![0-9A-Za-z.!@?#"$%&:;() *+,/;-=[\\]^_{|}<>\u0400-\u04FF]{3,})',
	IS_STRING_VALID_SHORT_LONG = '^(?![0-9A-Za-z.!@?#"$%&:;() *+,/;-=[\\]^_{|}<>\u0400-\u04FF]{50,})',
	IS_VALID_STRING_EMAIL = '^[a-zA-Z0-9@.]*$',
	IS_STRING_SHORT = '^.{3,}',
	IS_STRING_SHORT_DESCRIPTION = '^.{50,}',
	IS_EMAIL = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
	IS_PASSWORD = '^[a-zA-Z0-9]*$',
}
