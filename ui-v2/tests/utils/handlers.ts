import { http, HttpResponse } from "msw";

const automationsHandlers = [
	http.post("http://localhost:4200/api/automations/filter", () => {
		return HttpResponse.json([]);
	}),

	http.post("http://localhost:4200/api/automations/", () => {
		return HttpResponse.json({ status: "success" }, { status: 201 });
	}),

	http.patch("http://localhost:4200/api/automations/:id", () => {
		return new HttpResponse(null, { status: 204 });
	}),
	http.delete("http://localhost:4200/api/automations/:id", () => {
		return HttpResponse.json({ status: 204 });
	}),
];

const flowHandlers = [
	http.post("http://localhost:4200/api/flows/paginate", () => {
		return HttpResponse.json({
			results: [
				{ id: "1", name: "Flow 1", tags: [] },
				{ id: "2", name: "Flow 2", tags: [] },
			],
		});
	}),
	http.post("http://localhost:4200/api/flow_runs/filter", () => {
		return HttpResponse.json([
			{ id: "1", name: "Flow 1", tags: [] },
			{ id: "2", name: "Flow 2", tags: [] },
		]);
	}),

	http.post("http://localhost:4200/api/deployments/count", () => {
		return HttpResponse.json(1);
	}),
];

const globalConcurrencyLimitsHandlers = [
	http.post("http://localhost:4200/api/v2/concurrency_limits/filter", () => {
		return HttpResponse.json([]);
	}),
	http.post("http://localhost:4200/api/v2/concurrency_limits/", () => {
		return HttpResponse.json({ status: "success" }, { status: 201 });
	}),
	http.patch(
		"http://localhost:4200/api/v2/concurrency_limits/:id_or_name",
		() => {
			return new HttpResponse(null, { status: 204 });
		},
	),
	http.delete(
		"http://localhost:4200/api/v2/concurrency_limits/:id_or_name",
		() => {
			return HttpResponse.json({ status: 204 });
		},
	),
];

const taskRunConcurrencyLimitsHandlers = [
	http.post("http://localhost:4200/api/concurrency_limits/filter", () => {
		return HttpResponse.json([]);
	}),
	http.post(
		"http://localhost:4200/api/concurrency_limits/tag/:tag/reset",
		() => {
			return HttpResponse.json({ status: 200 });
		},
	),
	http.delete("http://localhost:4200/api/concurrency_limits/:id", () => {
		return HttpResponse.json({ status: 204 });
	}),
];

const variablesHandlers = [
	http.post("http://localhost:4200/api/variables/", () => {
		return HttpResponse.json({ status: "success" }, { status: 201 });
	}),

	http.post("http://localhost:4200/api/variables/filter", () => {
		return HttpResponse.json([]);
	}),

	http.post("http://localhost:4200/api/variables/count", () => {
		return HttpResponse.json(0);
	}),

	http.patch("http://localhost:4200/api/variables/:id", () => {
		return new HttpResponse(null, { status: 204 });
	}),
	http.delete("http://localhost:4200/api/variables/:id", () => {
		return HttpResponse.json({ status: 204 });
	}),
];

export const handlers = [
	...automationsHandlers,
	...flowHandlers,
	...globalConcurrencyLimitsHandlers,
	...taskRunConcurrencyLimitsHandlers,
	...variablesHandlers,
];
