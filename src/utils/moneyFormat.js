const { format } = require("prettier");

export default function moneyFormat(value) {
    if(value === Math.round(value)) {
        return formatWithDollar(value) + '.00';
    }
    return formatWithDollar(value);
}

function formatWithDollar(value) {
    return '$' + value.toLocaleString('en-US');
}
