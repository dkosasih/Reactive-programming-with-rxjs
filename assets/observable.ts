export interface Observer<T> {
    next(value: T): void;
    error(err: any): void;
    complete(): void;
}

class Subscriber<T> implements Observer<T> {
    closed = false;

    constructor(private destination: Observer<T>,
        private subscription: Subscription) {
        subscription.add(() => (this.closed = true));
    }

    next(value: T) {
        if (!this.closed) {
            this.destination.next(value);
        }
    }

    error(err: any) {
        if (!this.closed) {
            this.closed = true;
            this.destination.error(err);
            this.subscription.unsubscribe();
        }
    }

    complete() {
        if (!this.closed) {
            this.closed = true;
            this.destination.complete();
            this.subscription.unsubscribe();
        }
    }
}

class Subscription {
    private cleanUps: (() => void)[] = [];

    add(cleanUp: () => void) {
        this.cleanUps.push(cleanUp);
    }

    unsubscribe() {
        for (const cleanUp of this.cleanUps) {
            cleanUp();
        }
        this.cleanUps = [];
    }
}

export class Observable<T> {
    constructor(private init: (observer: Observer<T>) => () => void) {}

    subscribe(observer: Observer<T>): Subscription {
        const subscription = new Subscription();
        const subscriber = new Subscriber(observer, subscription);
        subscription.add(this.init(subscriber));

        return subscription;
    }
}
