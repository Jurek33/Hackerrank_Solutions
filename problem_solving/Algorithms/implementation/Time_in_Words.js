function timeInWords(h, m) {
    const words = ['zero', 'one', 'two','three', 'four', 'five','six',
    'seven', 'eigth','nine', 'ten', 'eleven','twelve', 'thirteen',
    'fourteen','quarter', 'sixteen', 'seventeen','eightteen','nineteen', 
    'twenty','tweny one', 'twenty twoo', 'twenty three', 'twenty four', 
    'twenty five', 'twenty six', 'twenty seven', 'twenty eight','twenty nine'];
    if(m==0) {
        return words[h]+" o' clock"
    } else if(m>=1 && m<=30) {
        if(m===15) return words[m]+" past "+words[h];
        if(m===30) return "half past "+words[h]; 
        if(m<10) return words[m]+" minute past "+words[h];
        return words[m]+" minutes past "+words[h];
    } else if(m>30) {
        if(m===45) return words[60-m]+" to "+words[h+1];
        return words[60-m]+" minutes to "+words[h+1];
    }
}