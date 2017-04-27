/**
 * Created by mkushniriov on 27/04/2017.
 */


export class TimeUtils {
    /** will return
     * 0 => if dates are equal,
     * 1 => if d1 before d2,
     * -1 => if d2 before d1*/
    _timeCompare(d1, d2) {
        if (d1.getTime() === d2.getTime()) return 0;
        if (d1 < d2) return 1;
        return -1;
    }
}