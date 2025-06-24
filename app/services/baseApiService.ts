import ky from "ky";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export interface ApiResponse<T> {
  code: number;
  success: boolean;
  data: T;
  message: string;
}

export class BaseApiService {
  protected readonly api: typeof ky;

  protected constructor() {
    this.api = ky.create({
      prefixUrl: API_BASE_URL,
      timeout: 10000,
      retry: {
        limit: 2,
        methods: ["get", "post"],
        statusCodes: [408, 429, 500, 502, 503, 504],
      },
      hooks: {
        beforeRequest: [
          (request) => {
            request.headers.set("Content-Type", "application/json");
          },
        ],
        afterResponse: [
          async (_request, _options, response) => {
            if (!response.ok) {
              const error = await response.json().catch(() => ({}));
              throw new Error(
                typeof error === "object" &&
                error !== null &&
                "message" in error
                  ? String(error.message)
                  : "API request failed"
              );
            }
            return response;
          },
        ],
      },
    });
  }
}
