import { Review } from '@prisma/client';

import { calclulateReviewRatingAverage } from '../../../../utils/calclulateReviewRatingAverage';
import Stars from '../../../components/Stars';

const Rating = ({ reviews }: { reviews: Review[] }) => (
  <div className="flex items-end">
    <div className="ratings mt-2 flex items-center">
      <Stars reviews={reviews} />
      <p className="text-reg ml-3">
        {calclulateReviewRatingAverage(reviews).toFixed(1)}
      </p>
    </div>
    <div>
      <p className="text-reg ml-4">
        {reviews.length} Review{reviews.length === 1 ? '' : 's'}
      </p>
    </div>
  </div>
);

export default Rating;
