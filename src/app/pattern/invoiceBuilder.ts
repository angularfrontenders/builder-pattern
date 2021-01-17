import { BuilderTemplate } from './builderTemplate';

import { IInvoice } from './iInvoice';

export class InvoiceBuilder extends BuilderTemplate<IInvoice> {

    protected initialize(): IInvoice {
        return {
            invoiceDate: new Date(),
            invoiceNumber: '',
            totalAmount: 0
        };
    }

    public invoiceDate(invoiceDate: Date): InvoiceBuilder {
        this._model.invoiceDate = invoiceDate;
        return this;
    }

    public invoiceNumber(invoiceNumber: string): InvoiceBuilder {
        this._model.invoiceNumber = invoiceNumber;
        return this;
    }

    public totalAmount(totalAmount: number): InvoiceBuilder {
        this._model.totalAmount = totalAmount;
        return this;
    }
}
