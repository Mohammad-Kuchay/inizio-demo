/**
 * Interface for the LoanApprovedIntegrationEvent IntegrationEvent. Contains the properties of LoanApprovedDomainEvent
 *
 * @export
 * @interface ILoanApprovedIntegrationEventProps
 */
export interface ILoanApprovedIntegrationEventProps {
    id: string;
    loanId: string;
    customerId: string;
    amount: number;
}
