import { useState } from 'react'

const LogiqueModal = () => {

    const [st, hm] = useState(false);

    function changeStateModal() {
        hm(!st);
    }

    return [
        st,
        changeStateModal]
};

export default LogiqueModal