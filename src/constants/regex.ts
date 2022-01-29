// ^[a-zA-Z1-9 ]*$
// ^[0-9A-Za-z.!@?#"$%&:;() *+,/;-=[\\]^_{|}<>\u0400-\u04FF]*$
export const enum regexString {
	IS_VALID_STRING = '^[0-9A-Za-z.!@?#"$%&:;() *+,/;-=[\\]^_{|}<>\u0400-\u04FF]*$',
	IS_STRING_VALID_SHORT = '^(?![0-9A-Za-z.!@?#"$%&:;() *+,/;-=[\\]^_{|}<>\u0400-\u04FF]{3,})',
	IS_STRING_VALID_SHORT_LONG = '^(?![0-9A-Za-z.!@?#"$%&:;() *+,/;-=[\\]^_{|}<>\u0400-\u04FF]{50,})',
	IS_VALID_STRING_EMAIL = '^[a-zA-Z0-9@.]*$',
	IS_STRING_SHORT = '^(?![a-zA-Z0-9 ]{3,})',
	IS_STRING_SHORT_DESCRIPTION = '^(?![a-zA-Z0-9 ]{50,})',
	IS_EMAIL = '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;',
	IS_PASSWORD = '^[a-zA-Z0-9]*$',
}
