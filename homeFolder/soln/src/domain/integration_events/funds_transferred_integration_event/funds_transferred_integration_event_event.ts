import { IRequestContextManager, IntegrationEvent, IntegrationEventRecord, RequestContext } from '@neudesic/inizio-node-core';
import { InizioApp, TYPES } from '@neudesic/inizio-app-builder';
import { IConfigurationManager } from '@neudesic/inizio-configuration-manager';
import { IFundsTransferredIntegrationEventIntegrationEventProps } from './funds_transferred_integration_event_event_props';

const EVENT_TYPE = 'FundsTransferredIntegrationEventIntegrationEvent';
export class FundsTransferredIntegrationEventIntegrationEvent extends IntegrationEvent {
    data: IFundsTransferredIntegrationEventIntegrationEventProps;
    topicName: string;

    private constructor(
        props: IFundsTransferredIntegrationEventIntegrationEventProps,
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

    public static create(props: IFundsTransferredIntegrationEventIntegrationEventProps): FundsTransferredIntegrationEventIntegrationEvent {
        const SOURCE = InizioApp.container.get<IConfigurationManager>(TYPES.ConfigurationManager).get('APP_NAME');
        const CONTEXT = InizioApp.container.get<IRequestContextManager>(TYPES.RequestContextManager).getContextData();
        return new FundsTransferredIntegrationEventIntegrationEvent(props, EVENT_TYPE, SOURCE, CONTEXT, 'FundsTransferredEvent', props.id);
    }
}
