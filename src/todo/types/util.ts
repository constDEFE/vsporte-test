type GetHandlers<T extends keyof JSX.IntrinsicElements> = Extract<keyof JSX.IntrinsicElements[T], `on${string}`>;

type GetEvents<
	Element extends keyof JSX.IntrinsicElements,
	Handlers = Extract<keyof JSX.IntrinsicElements[Element], `on${string}`>
> = Handlers extends `on${infer Event}` ? Uncapitalize<Event> : never;

export type EventFor<
	Element extends keyof JSX.IntrinsicElements,
	Event extends GetEvents<Element>
> = JSX.IntrinsicElements[Element][`on${Capitalize<Event>}` extends GetHandlers<Element>
	? `on${Capitalize<Event>}`
	: never] extends ((e: infer HandlerEvent) => unknown) | undefined
	? HandlerEvent
	: never;
