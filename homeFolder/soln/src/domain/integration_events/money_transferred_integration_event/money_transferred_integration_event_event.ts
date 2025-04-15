import { IRequestContextManager, IntegrationEvent, IntegrationEventRecord, RequestContext } from '@neudesic/inizio-node-core';
import { InizioApp, TYPES } from '@neudesic/inizio-app-builder';
import { IConfigurationManager } from '@neudesic/inizio-configuration-manager';
import { IMoneyTransferredIntegrationEventIntegrationEventProps } from './money_transferred_integration_event_event_props';

const EVENT_TYPE = 'MoneyTransferredIntegrationEventIntegrationEvent';
export class MoneyTransferredIntegrationEventIntegrationEvent extends IntegrationEvent {
    data: IMoneyTransferredIntegrationEventIntegrationEventProps;
    topicName: string;

    private constructor(
        props: IMoneyTransferredIntegrationEventIntegrationEventProps,
        eventType: string,
        eventSource: string,
        context: RequestContext,
        topicName: string,
        messageKey?: string
    ) {
        super(eventType, eventSource, '', context, messageKey);
        this.data = props;
        this.topicName = topicName;
    }

    flatten(): IntegrationEventRecord<any> {
        return {
            eventId: this.data.id,
            eventType: this.eventType,
            dateTimeOccurred: this.dateTimeOccurred,
            key: this.key,
            data: this.data,
            eventSource: this.eventSource,
            context: this.context,
            topic: this.topicName
        };
    }

    public static create(props: IMoneyTransferredIntegrationEventIntegrationEventProps): MoneyTransferredIntegrationEventIntegrationEvent {
        const SOURCE = InizioApp.container.get<IConfigurationManager>(TYPES.ConfigurationManager).get('APP_NAME');
        const CONTEXT = InizioApp.container.get<IRequestContextManager>(TYPES.RequestContextManager).getContextData();
        return new MoneyTransferredIntegrationEventIntegrationEvent(props, EVENT_TYPE, SOURCE, CONTEXT, 'MoneyTransferred', props.id);
    }
}
