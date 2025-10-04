import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { Response, Request, Headers } from "whatwg-fetch";
global.Response = Response;
global.Request = Request;
global.Headers = Headers;
