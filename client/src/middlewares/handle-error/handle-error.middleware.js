import { notification as notificationService } from 'services/services';

const handleError = () => next => action => {
  const errorMessage = action?.error?.message;
  if (errorMessage) {
    notificationService.error(errorMessage);
  }

  next(action);
};

export { handleError };
