import React from 'react'
import "./QnA.css"

const QnA = () => {
  return (
    <div>
                   <div class="style-0">
    <div class="style-1">
        <div class="style-2">
            <div class="style-3">
                <div class="style-4">
                    <div class="style-5">1</div>
                    <div class="style-6">+</div>
                </div>
                <p class="">Max 5 Questions</p>
            </div>
            <div class="style-7">
                <div class=""><input type="text" placeholder="Poll Question" class="style-8" value="" /></div>
                <div class="style-9">
                    <div class="style-10">Option Type:</div><label class=""><input type="radio" name="optionType" checked="" class="style-11" />Text</label><label class="style-12"><input type="radio" name="optionType" class="" />Image URL</label><label class="style-13"><input type="radio" name="optionType" class="" />Text and Image URL</label>
                </div>
                <div class="style-14">
                    <div class=""><input type="radio" name="ansOption" class="" /><input type="text" name="optionText_0" placeholder="Option" class="style-15" value="" /></div>
                    <div class=""><input type="radio" name="ansOption" class="" /><input type="text" name="optionText_1" placeholder="Option" class="style-16" value="" /></div>
                    <div class=""><input type="radio" name="ansOption" class="" /><input type="text" name="optionText_2" placeholder="Option" class="style-17" value="" /></div>
                    <div class=""><input type="radio" name="ansOption" class="" /><input type="text" name="optionText_3" placeholder="Option" class="style-18" value="" /></div>
                </div>
                <div class="style-19">
                    <div class="style-20">Timer Type:</div><label class=""><input type="radio" name="timerType" value="5 Sec" class="" /> 5 Sec</label><label class="style-21"><input type="radio" name="timerType" value="10 Sec" class="" />10 Sec</label><label class="style-22"><input type="radio" name="timerType" value="OFF" class="" /> OFF</label>
                </div>
                <div class="style-23"><button class="style-24">Cancel</button><button class="style-25">Create Quiz</button></div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default QnA
