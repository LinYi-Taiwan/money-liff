import React, {
    useEffect,
    useImperativeHandle,
    useState,
    forwardRef,
} from "react";
import Sheet from "react-modal-sheet";

const Modal = forwardRef(({ children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log("is modal open", isOpen);
    }, [isOpen]);

    useImperativeHandle(
        ref,
        () => ({
            open: () => {
                setIsOpen(true);
            },
            close: () => {
                setIsOpen(false);
            },
        }),
        []
    );

    return (
        <>
            <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Sheet.Container>
                    <Sheet.Content>{children}</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
});

Modal.propTypes = {};

export default Modal;
