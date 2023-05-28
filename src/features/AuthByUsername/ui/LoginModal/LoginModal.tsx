import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props:LoginModalProps) => {
    const { isOpen, className, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            className={classNames('', {}, [className])}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
