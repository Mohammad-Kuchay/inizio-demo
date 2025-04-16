/**
 * Interface for the FundsTransferredIntegrationEventIntegrationEvent IntegrationEvent. Contains the properties of FundsTransferredIntegrationEventDomainEvent
 *
 * @export
 * @interface IFundsTransferredIntegrationEventIntegrationEventProps
 */
export interface IFundsTransferredIntegrationEventIntegrationEventProps {
    id: string;
    sourceAccountNumber: string;
    destinationAccountNumber: string;
    amount: number;
    transferDate: Date;
}
