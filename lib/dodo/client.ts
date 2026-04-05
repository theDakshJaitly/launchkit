import DodoPayments from "dodopayments";

let _dodo: DodoPayments | null = null;

export function getDodo(): DodoPayments {
    if (!_dodo) {
        if (!process.env.DODO_PAYMENTS_API_KEY) {
            throw new Error("Missing DODO_PAYMENTS_API_KEY environment variable");
        }
        _dodo = new DodoPayments({
            bearerToken: process.env.DODO_PAYMENTS_API_KEY,
            environment: (process.env.DODO_PAYMENTS_ENV as "live_mode" | "test_mode") || "test_mode",
        });
    }
    return _dodo;
}
