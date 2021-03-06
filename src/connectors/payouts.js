import { connect } from "react-redux";
import * as sel from "../selectors";
import * as act from "../actions";

export default connect(
  sel.selectorMap({
    payouts: sel.payouts,
    error: sel.generatePayoutsError,
    loading: sel.isApiRequestingGeneratePayouts,
    loggedInAsEmail: sel.loggedInAsEmail,
    isApiRequestingPayInvoices: sel.isApiRequestingPayInvoices
  }),
  {
    onGeneratePayouts: act.onGeneratePayouts,
    onPayApprovedInvoices: act.onPayApprovedInvoices,
    confirmWithModal: act.confirmWithModal
  }
);
