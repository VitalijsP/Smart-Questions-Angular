import { Component, Input } from '@angular/core';
import { SmartJoke } from './models/SmartJoke.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  smartJokes = [
    {
      question:
        'A man lives on the 100th floor of an apartment building. On rainy days he rides the elevator all the way up. However, on sunny days, he goes half way and takes the stairs the rest of the way. Why?',
      answer:
        'The man is short and can only reach the button for the 50th floor on the elevator. On rainy days, he uses his umbrella handle.',
    },
    {
      question:
        'A man and his son were in an automobile accident. The man died on the way to the hospital, but the boy was rushed into surgery. The emergency room surgeon said, “I cannot operate, because that is my son!” How was this possible?',
      answer: 'The emergency room surgeon was his mother.',
    },
    {
      question:
        'A man dressed in all black is walking down a country lane. Suddenly, a large black car with no lights on comes around the corner and screeches to a halt. How did the car’s driver know he was there?',
      answer: 'It was day time.',
    },
    {
      question:
        'Robert, my neighbor, a forty-five-year-old blacksmith is seven feet tall, and eats all day long. What does he weigh?',
      answer: 'Iron',
    },
    {
      question:
        'Complete this series of numbers: 9 = 4, 21 = 9, 22 = 9, 24 = 10, 8 = 5, 7 = 5, 99 = 10, 100 = 7, 16 =?, 17 =?',
      answer:
        '16 = 7 and 17 = 9 [(Each number equal the number of letters in their spelling, i.e. 16 (sixteen) is 7 and 17 (seventeen) is 9.]',
    },
    {
      question:
        'There are three important rooms in a house. The first one is filled with money. The second one is filled with important papers. The third one is filled with jewelry. One day all of these rooms burst into fire. Which room did the policemen put out the fire in first?',
      answer:
        'None of them, because policemen do not put out fires; firemen do.',
    },
    {
      question: 'Why are 1968 pennies worth more than 1967 pennies?',
      answer:
        'Because there is one more penny in 1968 pennies than in 1967 pennies.',
    },
    {
      question:
        'A man has a fox, a chicken, and a sack of grain. He must cross a river, but cannot carry all of them at once. If he leaves the fox with the chicken, the fox will eat the chicken. However, if he leaves the chicken with the grain, the chicken will eat the grain. How can he get all three across safely?',
      answer:
        'He can take the chicken over first. Then he can go back and bring the grain next carrying the chicken for this trip. He leaves the chicken, and takes the fox to wait with the grain. Then he goes back to the other side and retrieves the chicken.',
    },
    {
      question:
        'There are eight men sitting on a couch. Three legs break and six men leave. How many legs are remaining?',
      answer:
        'Five; the legs of the two remaining men (4) and the remaining couch leg.',
    },
    {
      question:
        'You are driving a bus. When you begin your route, there is an old woman named Mrs. Smith and a young boy named Raymond are on the bus. At the first stop, the old woman leaves, and a salesman, named Ed, enters. At the next stop, Jack and his sister Jill get on, as well as three women with shopping bags. The bus travels fifteen minutes, then stops and Raymond gets off and a man and his wife get on. Next, a woman with a bird in a cage gets on the bus. What is the name of the bus driver?',
      answer: 'Well, remember that you are the one driving the bus!',
    },
    {
      question:
        'What is the maximum number of times a single page of a newspaper can be folded in half by hand?',
      answer:
        'Only once, because after that you will be folding it into quarters, eighths, etc.',
    },
    {
      question:
        'A fishing boat, with a ladder in it, is leaning against a wall at the harbor. There are 5 oars and 2 fishing nets in the trawler. The distance between two consecutive steps on the ladder is 1 meter. If waves lashing against the wall rise a half meter in every half hour, how long will it take before 6 steps of the ladder are under the waves?',
      answer:
        'Since the fishing boat rises with the waves, no steps will go under water.',
    },
    {
      question:
        'You ask the sales associate in a hardware store, “How much will one cost?””Twenty cents,” she replies.”And how much will twelve cost me?” you ask.”Forty cents,” she replies.”OK, I’ll take one hundred and twelve.”How much did you pay?',
      answer:
        'Answer: Sixty cents, because you needed three numbers for your house number – 112.',
    },
    {
      question:
        'On a Sunday morning, the oldest girl in a family was murdered. The father was reading the paper, the mother was in the kitchen cooking breakfast, and the girl’s brother was playing video games. Uncle George was visiting and was out getting the mail. Who murdered the girl?',
      answer:
        'Uncle George, because it was a Sunday and mail is not delivered on Sunday.',
    },
    {
      question: 'If you divide 30 by half and add ten, what do you get?',
      answer:
        'Half is 0.5. If you divide 30 by 0.5, you get 60. Add ten and you have 70.',
    },
  ];

  @Input() newSmartJoke: { question: string; answer: string};

  addJoke(newSmartJoke: SmartJoke): void {
    this.smartJokes.push(newSmartJoke);
  }

  deleteJoke(index: number): void {
    this.smartJokes.splice(index, 1);
  }
}
