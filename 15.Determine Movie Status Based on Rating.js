class Solution {
    get_movie_status(ratingStr) {
        // Write your code here
        let msg;
        if(ratingStr > 4.5) msg = 'Super Hit'
        else if(ratingStr > 3.4) msg = 'Hit'
        else if(ratingStr > 2.0) msg = 'Semi-hit'
        else msg = 'Flop'

        return msg
    }
}

module.exports = Solution;
