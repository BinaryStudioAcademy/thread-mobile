import { getDiff } from 'helpers/helpers';

const getSortedComments = comments => comments.slice().sort((a, b) => getDiff(b.createdAt, a.createdAt));

export { getSortedComments };
