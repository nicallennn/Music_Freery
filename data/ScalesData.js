
  const majorScale = {
    title: "Major Scale",
    intro_1: "The Major scale, also known as the Ionion scale, is a musical scale featured heavily in western music. It is made up of 7 notes -  with the 8th note being an octave above the root note - and is often said to have a bright and happy sound.",
    intro_2: "The major scale is a diatonic scale, which is a music scale that contains 5 whole steps (tones) and 2 half steps (semi-tones) per octave. When talking about notes in a scale, each note is given a scale degree. ",
    patternDescription: 'The scale is created using the following pattern of whole-steps (tones) and half-steps (semi-tones), starting from the root note (R):',
    pattern: "R - W - W - H - W - W - W - H",
    example: "Lets follow this pattern to find the C major scale. So starting on the root note C, we make one whole-step (tone) to the right to D, another whole-step to E, a half-step (semitone) to F, a whole step to G, a whole-step to A, a whole-step to B, finally the scale is completed with a half-step back to our root note C; completing one octave.",
    result: "This means the notes in the scale of C major are:",
    resultScale: "C, D, E, F, G, A, B, C",

    degrees: [
      {position: '1st', degree: 'Tonic'},
      {position: '2nd', degree: 'Supertonic'},
      {position: '3rd', degree: 'Mediant'},
      {position: '4th', degree: 'Subdominant'},
      {position: '5th', degree: 'Dominant'},
      {position: '6th', degree: 'Submediant'},
      {position: '7th', degree: 'Leading tone'},
      {position: '8th', degree: 'Tonic'},

    ],

    positions: [
        {scale: 'D - E - F - G - A - B - C',  key: 'C',  img: require('../img/scales/major/c.png')},
        {scale: 'D# - F - F# - G# - A# - C - C#', key: 'C#', img: require('../img/scales/major/csharp.png')},
        {scale: 'E - F# - G - A - B - C# - D',  key: 'D',  img: require('../img/scales/major/d.png')}, 
        {scale: 'F - G - G# - A# - C - D - D#',  key: 'D#',  img: require('../img/scales/major/dsharp.png')}, 
        {scale: 'F# - G# - A - B - C# - D# - E',  key: 'E',  img: require('../img/scales/major/e.png')}, 
        {scale: 'G - A - A# - C - D - E - F',  key: 'F',  img: require('../img/scales/major/f.png')}, 
        {scale: 'G# - A# - B - C# - D# - F - F#',  key: 'F#',  img: require('../img/scales/major/fsharp.png')},
        {scale: 'A - B - C - D - E - F# - G',  key: 'G',  img: require('../img/scales/major/g.png')}, 
        {scale: 'A# - C - C# - D# - F - G - G#',  key: 'G#',  img: require('../img/scales/major/gsharp.png')}, 
        {scale: 'B - C# - D - E - F# - G# - A',  key: 'A',  img: require('../img/scales/major/a.png')}, 
        {scale: 'C - D - D# - F - G - A - A#',  key: 'A#',  img: require('../img/scales/major/asharp.png')}, 
        {scale: 'C# - D# - E - F# - G# - A# - B',  key: 'B',  img: require('../img/scales/major/b.png')},  
      ],

      exercises: [
        {key: 'Ex 1', exercise: 'Get a pen and paper, on the top of the paper make a note of the pattern for the major scale (W - W - H - W - W - W- H). Starting with the root note of C, write out all the notes in the major scale using the noted pattern; step through each root note (C-B) and write out the notes for each scale.'},
        {key: 'Ex 2', exercise: 'On a piano/keyboard or instrument of your choice, play through the major scale starting on each root note, reading though the notes you made in exercise 1.'},
        {key: 'Ex 3', exercise: 'To help you remember the pattern, pick a few random root notes and using pen and paper (and without noting the pattern), write out the notes in the major scale for each root note.'},
        {key: 'Ex 4', exercise: 'On a piano/keyboard/instument, play through the major scale for each root note without refering to your notes. For this exercise you may play them in order, starting with the root note on C. *** Note: You may find it helpful to say the pattern out loud as you play though the notes.'},
        {key: 'Ex 5', exercise: 'On a piano/keyboard/instrument, pick a root note at random and play through the major scale, then play it an octave higher, then an octave lower, then play it backwards, then backwards an ocave higher, then backwards an octave lower.'},
      ],

      whatNext: "Once you have mastered the major scale it is time to move on to the minor scales. It is highly recommended you continue to practice these - or your own - exercises regularly to help build and retain muscle memory to play the major scale from each root/starting note.",
      whatNext_2: "If your ready to move on, press the back button to go back to the scales home page or click the button below to navigate direct to the minor scale page.",
      nextSubject: "Natural Minor"
  }
  
  
  const natMinorScale = {
    title: "Natural Minor scale",
    intro_1: "The Natural Minor scale, also known as the Aeolian mode, is a scale built by starting on the 6th degree of the major scale. This means where the pattern of the major scale is W, W, H, W, W, W, H, the minor scale begins on the 6th step of this pattern and loops round until the scale repeats the root note. The natural minor scale is typically associated with a sad and moody sound.",
    intro_2: "Like the major scale, the natural minor scale is a diatonic scale. A quick way to convert a major scale into a minor scale is to lower the 3rd, 6th and 7th degrees by a half-step (semi-tone).",
    patternDescription: 'The scale is created using the following pattern of whole-steps (tones) and half-steps (semi-tones), starting from the root note (R):',
    pattern: "R - W - H - W - W - H - W - W",
    example: "Let’s follow this pattern to find the C natural minor scale. So starting on the root note C, we make one whole-step (tone) to the right to D, a half-step (semi-tone)  to D#, a whole-step to F, a whole-step to G, a half-step to G#, a whole-step to A#, finally the scale is completed with a whole-step back to our root note of C; completing one full octave.",
    result: "This means the notes in the scale of C natural minor are:",
    resultScale: "C, D, D#, F, G, G#, A#, C",

    degrees: [
      {position: '1st', degree: 'Tonic'},
      {position: '2nd', degree: 'Supertonic'},
      {position: '3rd', degree: 'Mediant'},
      {position: '4th', degree: 'Subdominant'},
      {position: '5th', degree: 'Dominant'},
      {position: '6th', degree: 'Submediant'},
      {position: '7th', degree: 'Subtonic'},
      {position: '8th', degree: 'Tonic'},
    ],

    positions: [
        {scale: 'D - D# - F - G - G# - A# - C',  key: 'C',  img: require('../img/scales/nat_minor/c.png')},
        {scale: 'D# - E - F# - G# - A - B - C#', key: 'C#', img: require('../img/scales/nat_minor/csharp.png')},
        {scale: 'E - F - G - A - A# - C - D',  key: 'D',  img: require('../img/scales/nat_minor/d.png')}, 
        {scale: 'F - F# - G# - A# - B - C# - D#',  key: 'D#',  img: require('../img/scales/nat_minor/dsharp.png')}, 
        {scale: 'F# - G - A - B - C - D - E',  key: 'E',  img: require('../img/scales/nat_minor/e.png')}, 
        {scale: 'G - G# - A# - C - C# - D# - F',  key: 'F',  img: require('../img/scales/nat_minor/f.png')}, 
        {scale: 'G# - A - B - C# - D - E - F#',  key: 'F#',  img: require('../img/scales/nat_minor/fsharp.png')},
        {scale: 'A - A# - C - D - D# - F - G',  key: 'G',  img: require('../img/scales/nat_minor/g.png')}, 
        {scale: 'A# - B - C# - D# - E - F# - G#',  key: 'G#',  img: require('../img/scales/nat_minor/gsharp.png')}, 
        {scale: 'B - C - D - E - F - G - A',  key: 'A',  img: require('../img/scales/nat_minor/a.png')}, 
        {scale: 'C - C# - D# - F - F# - G# - A#',  key: 'A#',  img: require('../img/scales/nat_minor/asharp.png')}, 
        {scale: 'C# - D - E - F# - G - A - B ',  key: 'B',  img: require('../img/scales/nat_minor/b.png')},  
      ],

      exercises: [
        {key: 'Ex 1', exercise: 'Get a pen and paper, on the top of the paper make a note of the pattern for the major scale (W - H - W - W - H - W- W). Starting with the root note of C, write out all the notes in the natural minor scale using the noted pattern; step through each root note (C-B) and write out the notes for each scale. '},
        {key: 'Ex 2', exercise: 'On a piano/keyboard or instrument of your choice, play through the natural minor scale starting on each root note, reading though the notes you made in exercise 1.'},
        {key: 'Ex 3', exercise: 'To help you remember the pattern, pick a few random root notes and using pen and paper (and without noting the pattern), write out the notes in the natural minor scale for each root note.'},
        {key: 'Ex 4', exercise: 'On a piano/keyboard/instrument, play through the natural minor scale for each root note without referring to your notes. For this exercise you may play them in order, starting with the root note on C. *** Note: You may find it helpful to say the pattern out loud as you play though the notes.'},
        {key: 'Ex 5', exercise: 'On a piano/keyboard/instrument, pick a root note at random and play through the natural minor scale, then play it an octave higher, then an octave lower, then play it backwards, then backwards an octave higher, then backwards an octave lower.'},
      ],
      whatNext: "Once you have mastered the natural minor scale it is time to move on to look at the harmonic minor scale. It is highly recommended that you continue to practice these exercises - or you own exercises - regularly to help build and retain muscle memory to play the natural minor scale from each root/starting note.",
      whatNext_2: "If you are ready to move on, press the back button to go back to the scales home page or click the button below to navigate to the harmonic minor scale page.",
      nextSubject: "Harmonic Minor"
  }

  const harMinorScale = {
    title: "Harmonic Minor scale",
    intro_1: "The harmonic minor scale is one of 3 minor scales and is a variation of the natural minor (aeolian mode). The scale is produced by raising the 7th note of the natural minor scale by a half-step (semi-tone) giving the pattern W,H,W,W,H,W+H,H.",
    intro_2: "The harmonic minor scale can be derived from the major scale by lowering the 3rd and 6th degrees by a half-step (semi-tone) or by shifting the 7th degree of the natural minor scale up by one half-step (semi-tone). The scale gives off a sound reminiscent of middle-eastern music.",
    patternDescription: 'The scale is created using the following pattern of whole-steps (tones) and half-steps (semi-tones), starting from the root note (R):',
    pattern: "R - W - H - W - W - H - W+H - H",
    example: "Let’s follow this pattern to find the C harmonic minor scale. So starting on the root note C, we make one whole-step (tone) to the right to D, a half-step (semi-tone)  to D#, a whole-step to F, a whole-step to G, a half-step to G#, a whole-step plus a half-step to to B, finally the scale is completed with a half-step back to our root note of C; completing one full octave.",
    result: "This means the notes in the scale of C harmonic minor are: ",
    resultScale: "C, D, D#, F, G, G#, B, C",

    degrees: [
      {position: '1st', degree: 'Tonic'},
      {position: '2nd', degree: 'Supertonic'},
      {position: '3rd', degree: 'Mediant'},
      {position: '4th', degree: 'Subdominant'},
      {position: '5th', degree: 'Dominant'},
      {position: '6th', degree: 'Submediant'},
      {position: '7th', degree: 'Leading Tone'},
      {position: '8th', degree: 'Tonic'},
    ],

    positions: [
        {scale: 'D - D# - F - G - G# - B - C',  key: 'C',  img: require('../img/scales/harm_minor/c.png')},
        {scale: 'D# - E - F# - G# - A - C - C#', key: 'C#', img: require('../img/scales/harm_minor/csharp.png')},
        {scale: 'E - F - G - A - A# - C# - D',  key: 'D',  img: require('../img/scales/harm_minor/d.png')}, 
        {scale: 'F - F# - G# - A# - B - D - D#',  key: 'D#',  img: require('../img/scales/harm_minor/dsharp.png')}, 
        {scale: 'F# - G - A - B - C - D# - E',  key: 'E',  img: require('../img/scales/harm_minor/e.png')}, 
        {scale: 'G - G# - A# - C - C# - E - F',  key: 'F',  img: require('../img/scales/harm_minor/f.png')}, 
        {scale: 'G# - A - B - C# - D - F - F#',  key: 'F#',  img: require('../img/scales/harm_minor/fsharp.png')},
        {scale: 'A - A# - C - D - D# - F# - G',  key: 'G',  img: require('../img/scales/harm_minor/g.png')}, 
        {scale: 'A# - B - C# - D# - E - G - G#',  key: 'G#',  img: require('../img/scales/harm_minor/gsharp.png')}, 
        {scale: 'B - C - D - E - F - G# - A',  key: 'A',  img: require('../img/scales/harm_minor/a.png')}, 
        {scale: 'C - C# - D# - F - F# - A - A#',  key: 'A#',  img: require('../img/scales/harm_minor/asharp.png')}, 
        {scale: 'C# - D - E - F# - G - A# - B',  key: 'B',  img: require('../img/scales/harm_minor/b.png')},  
      ],

      exercises: [
        {key: 'Ex 1', exercise: 'Get a pen and paper, on the top of the paper make a note of the pattern for the major scale (W - H - W - W - H - W+H - W). Starting with the root note of C, write out all the notes in the harmonic minor scale using the noted pattern; step through each root note (C-B) and write out the notes for each scale.'},
        {key: 'Ex 2', exercise: 'On a piano/keyboard or instrument of your choice, play through the harmonic minor scale starting on each root note, reading though the notes you made in exercise 1.'},
        {key: 'Ex 3', exercise: 'To help you remember the pattern, pick a few random root notes and using pen and paper (and without noting the pattern), write out the notes in the harmonic minor scale for each root note.'},
        {key: 'Ex 4', exercise: 'On a piano/keyboard/instrument, play through the harmonic minor scale for each root note without referring to your notes. For this exercise you may play them in order, starting with the root note on C. *** Note: You may find it helpful to say the pattern out loud as you play though the notes.'},
        {key: 'Ex 5', exercise: 'On a piano/keyboard/instrument, pick a root note at random and play through the harmonic minor scale, then play it an octave higher, then an octave lower, then play it backwards, then backwards an octave higher, then backwards an octave lower.'},
      ],
      whatNext: "Once you have mastered the harmonic minor scale it is time to move on to look at the melodic minor scale. It is highly recommended that you continue to practice these exercises - or you own exercises - regularly to help build and retain muscle memory to play the harmonic minor scale from each root/starting note.",
      whatNext_2: "If you are ready to move on click the button below to navigate to the melodic minor scale page.",
      nextSubject: "Melodic Minor"
  }

  const melMinorScale = {
    title: "Melodic Minor scale",
    intro_1: "The melodic minor scale is a variation of the natural minor scale (aeolian mode). When playing the classical version of this scale scale the notes included in the scale depend on whether you are playing up the scale or down the scale. When playing up through the scale the 6th and 7th degrees of the scale are raised by one half-step (semi-tone); when playing down the scale the 6th and 7th degrees are lowered back to the natural minor scale.",
    intro_2: "When playing up the scale you can quickly find the notes in the ascending melodic minor by simply playing a major scale with the 3rd note (degree) lowered by a half-step (semi-tone). When playing down the scale, the descending melodic minor scale is simply the natural minor scale. ",
    patternDescription: 'The scale is created using the following pattern of whole-steps (tones) and half-steps (semi-tones), starting from the root note (R):',
    pattern: "R - W - H - W - W - W - W - H",
    example: "Let’s follow this pattern to find the ascending C melodic minor scale. So starting on the root note C, we make one whole-step (tone) to the right to D, a half-step (semi-tone) to D#, a whole-step to F, a whole-step to G, a whole-step to A, a whole-step to to B, finally the scale is completed with a half-step back to our root note of C; completing one full octave.",
    result: "This means the notes in the ascending scale of C melodic minor are:",
    resultScale: "C, D, D#, F, G, A, B, C ",
    result_2: "The notes in the descending scale of C melodic minor are the same as the notes in the C natural minor scale",
    resultScale_2: "(C, D, D#, F, G, G#, A#, C)",
    resultScale_img: require('../img/scales/nat_minor/c.png'),
    positions: [
        {scale: 'D - D# - F - G - A - B - C',  key: 'C',  img: require('../img/scales/mel_minor/c.png')},
        {scale: 'D# - E - F# - G# - A# - C - C#', key: 'C#', img: require('../img/scales/mel_minor/csharp.png')},
        {scale: 'E - F - G - A - B - C# - D',  key: 'D',  img: require('../img/scales/mel_minor/d.png')}, 
        {scale: 'F - F# - G# - A# - C - D - D#',  key: 'D#',  img: require('../img/scales/mel_minor/dsharp.png')}, 
        {scale: 'F# - G - A - B - C# - D# - E',  key: 'E',  img: require('../img/scales/mel_minor/e.png')}, 
        {scale: 'G - G# - A# - C - D - E - F',  key: 'F',  img: require('../img/scales/mel_minor/f.png')}, 
        {scale: 'G# - A - B - C# - D# - F - F#',  key: 'F#',  img: require('../img/scales/mel_minor/fsharp.png')},
        {scale: 'A - A# - C - D - E - F# - G',  key: 'G',  img: require('../img/scales/mel_minor/g.png')}, 
        {scale: 'A# - B - C# - D# - F - G - G#',  key: 'G#',  img: require('../img/scales/mel_minor/gsharp.png')}, 
        {scale: 'B - C - D - E - F# - G# - A',  key: 'A',  img: require('../img/scales/mel_minor/a.png')}, 
        {scale: 'C - C# - D# - F - G - A - A#',  key: 'A#',  img: require('../img/scales/mel_minor/asharp.png')}, 
        {scale: 'C# - D - E - F# - G# - A# - B',  key: 'B',  img: require('../img/scales/mel_minor/b.png')},  
      ],

      exercises: [
        {key: 'Ex 1', exercise: 'Get a pen and paper, on the top of the paper make a note of the pattern for the major scale (W - H - W - W - W - W - W). Starting with the root note of C, write out all the notes in the ascending melodic minor scale using the noted pattern; step through each root note (C-B) and write out the notes for each ascending scale. Then repeat for the descending melodic minor scale (natural minor scale).'},
        {key: 'Ex 2', exercise: 'On a piano/keyboard or instrument of your choice, play up through the ascending melodic minor scale and down through the descending melodic minor scale, starting on each root note, reading though the notes you made in exercise 1.'},
        {key: 'Ex 3', exercise: 'To help you remember the pattern, pick a few random root notes and using pen and paper (and without noting the pattern), write out the notes in the ascending and descending melodic minor scale for each root note.'},
        {key: 'Ex 4', exercise: 'On a piano/keyboard/instrument, play through the ascending and descending melodic minor scales for each root note without referring to your notes. For this exercise you may play them in order, starting with the root note on C. *** Note: You may find it helpful to say the pattern out loud as you play though the notes.'},
        {key: 'Ex 5', exercise: 'On a piano/keyboard/instrument, pick a root note at random and play through the ascending and descending melodic minor scale, then play it an octave higher, then an octave lower. Finally starting at a lower octave, play through the ascending scale, then play it 1 octave higher, then 2 octaves higher; then from that point, play the descending scale, then 1 octave lower, then another octave lower.'},
      ],
      whatNext: "You have now mastered the major scale and 3 minor scales. It is highly recommended that you continue to practice these exercises - or you own exercises - regularly to help build and retain muscle memory to play each of the scales from each root/starting note.",
      whatNext_2: "If you are ready to move on click the button below to navigate back to the main scales page.",
      nextSubject: "Scales"
  }

  const majorPentatonicScale = {
    title: "Major Pentatonic scale",
    intro_1: "Up to now we have focused on heptatonic scales (scales which contain 7 notes per octave), we will now move on to look at Pentatonic scales; musical scales made up of 5 notes per octave. The word ‘pentatonic’ is derived from the greek words ‘pente’ meaning five and ‘tonic’ meaning tone - i.e. five-tone.",
    intro_2: "The major pentatonic scale is a commonly used musical scale and is anhemitonic, which means it contains no half-steps (semi-tones). You can easily convert a major scale to a major pentatonic scale by removing the 4th and 7th degrees.",
    patternDescription: 'The scale is created using the following pattern of whole-steps (tones) and whole-steps plus half-steps (1.5 tones or 3 semi-tones), starting from the root note (R):',
    pattern: "R - W - W - W+H - W - W+H",
    example: "Let’s follow this pattern to find the C major pentatonic scale. So starting on the root note C, we make one whole-step (tone) to the right to D, a whole-step to E, a whole-step plus half-step to G, a whole-step to A, a whole-step plus half-step to C, completing one full octave.",
    result: "This means the notes in the C major pentatonic scale are: ",
    resultScale: "C, D, E, G, A, C",
    positions: [
        {scale: 'D - E - G - A - C',  key: 'C',  img: require('../img/scales/maj_pentatonic/c.png')},
        {scale: 'D# - F - G# - A# - C#', key: 'C#', img: require('../img/scales/maj_pentatonic/csharp.png')},
        {scale: 'E - F# - A - B - D',  key: 'D',  img: require('../img/scales/maj_pentatonic/d.png')}, 
        {scale: 'F - G - A# - C - D#',  key: 'D#',  img: require('../img/scales/maj_pentatonic/dsharp.png')}, 
        {scale: 'F# - G# - B - C# - E',  key: 'E',  img: require('../img/scales/maj_pentatonic/e.png')}, 
        {scale: 'G - A - C - D - F',  key: 'F',  img: require('../img/scales/maj_pentatonic/f.png')}, 
        {scale: 'G# - A# - C# - D# - F#',  key: 'F#',  img: require('../img/scales/maj_pentatonic/fsharp.png')},
        {scale: 'A - B - D- E - G',  key: 'G',  img: require('../img/scales/maj_pentatonic/g.png')}, 
        {scale: 'A# - C - D# - F - G#',  key: 'G#',  img: require('../img/scales/maj_pentatonic/gsharp.png')}, 
        {scale: 'B - C# - E - F# - A',  key: 'A',  img: require('../img/scales/maj_pentatonic/a.png')}, 
        {scale: 'C - D - F - G - A#',  key: 'A#',  img: require('../img/scales/maj_pentatonic/asharp.png')}, 
        {scale: 'C# - D# - F# - G# - B',  key: 'B',  img: require('../img/scales/maj_pentatonic/b.png')},  
      ],

      exercises: [
        {key: 'Ex 1', exercise: 'Get a pen and paper, on the top of the paper make a note of the pattern for the major scale (W - W - W+H - W - W+H). Starting with the root note of C, write out all the notes in the major pentatonic scale using the noted pattern; step through each root note (C-B) and write out the notes for each major pentatonic scale. '},
        {key: 'Ex 2', exercise: 'On a piano/keyboard or instrument of your choice, play through the major pentatonic scale starting on each root note, reading though the notes you made in exercise 1.'},
        {key: 'Ex 3', exercise: 'To help you remember the pattern, pick a few random root notes and using pen and paper (and without noting the pattern), write out the notes in the major pentatonic scale for each root note.'},
        {key: 'Ex 4', exercise: 'On a piano/keyboard/instrument, play through the major pentatonic scale for each root note without referring to your notes. For this exercise you may play them in order, starting with the root note on C. *** Note: You may find it helpful to say the pattern out loud as you play though the notes.'},
        {key: 'Ex 5', exercise: 'On a piano/keyboard/instrument, pick a root note at random and play through the major pentatonic scale, then play it an octave higher, then an octave lower, then play it backwards, then backwards an octave higher, then backwards an octave lower.'},
      ],
      whatNext: "Once you have mastered the major pentatonic scale. It is highly recommended that you continue to practice these exercises - or you own exercises - regularly to help build and retain muscle memory to play each of the major pentatonic scales from each root/starting note.",
      whatNext_2: "If you are ready to move on click the button below to navigate to the minor pentatonic scale.",
      nextSubject: "Minor Pentatonic"
  }

  const minorPentatonicScale = {
    title: "Minor Pentatonic scale",
    intro_1: "Like the major pentatonic scale, the minor pentatonic scale consists of 5 notes and is commonly used in many genres of music. ",
    intro_2: "The minor pentatonic scale can be derived from the natural minor (aeolian) scale by removing the 2nd and 6th degrees.",
    patternDescription: 'The scale is created using the following pattern of whole-steps (tones) and whole-steps plus half-steps (1.5 tones or 3 semi-tones), starting from the root note (R):',
    pattern: "R - W+H - W - W - W+H - W",
    example: "Let’s follow this pattern to find the C minor pentatonic scale. So starting on the root note C, we make one whole-step plus half-step (1.5 tones or 3 semi-tones) to the right to D, a whole-step to F, a whole-step to G, a whole-step plus half-step to A#, a whole-step to C, completing one full octave.",
    result: "This means the notes in C minor pentatonic scale are: ",
    resultScale: "C, D#, F, G, A#, C",
    positions: [
        {scale: 'D# - F - G - A# - C',  key: 'C',  img: require('../img/scales/min_pentatonic/c.png')},
        {scale: 'E - F# - G# - B - C#', key: 'C#', img: require('../img/scales/min_pentatonic/csharp.png')},
        {scale: 'F - G - A - C - D',  key: 'D',  img: require('../img/scales/min_pentatonic/d.png')}, 
        {scale: 'F# - G# - A# - C# - D#',  key: 'D#',  img: require('../img/scales/min_pentatonic/dsharp.png')}, 
        {scale: 'G - A - B - D - E',  key: 'E',  img: require('../img/scales/min_pentatonic/e.png')}, 
        {scale: 'G# - A# - C - D# - F',  key: 'F',  img: require('../img/scales/min_pentatonic/f.png')}, 
        {scale: 'A - B - C# - E - F#',  key: 'F#',  img: require('../img/scales/min_pentatonic/fsharp.png')},
        {scale: 'A# - C - D - F - G',  key: 'G',  img: require('../img/scales/min_pentatonic/g.png')}, 
        {scale: 'B - C# - D# - F# - G#',  key: 'G#',  img: require('../img/scales/min_pentatonic/gsharp.png')}, 
        {scale: 'C - D - E - G - A',  key: 'A',  img: require('../img/scales/min_pentatonic/a.png')}, 
        {scale: 'C# - D# - F - G# - A#',  key: 'A#',  img: require('../img/scales/min_pentatonic/asharp.png')}, 
        {scale: 'D - E - F# - A - B',  key: 'B',  img: require('../img/scales/min_pentatonic/b.png')},  
      ],
      exercises: [
        {key: 'Ex 1', exercise: 'Get a pen and paper, on the top of the paper make a note of the pattern for the major scale (W+H - W - W - W+H - W). Starting with the root note of C, write out all the notes in the minor pentatonic scale using the noted pattern; step through each root note (C-B) and write out the notes for each major pentatonic scale.'},
        {key: 'Ex 2', exercise: 'On a piano/keyboard or instrument of your choice, play through the minor pentatonic scale starting on each root note, reading though the notes you made in exercise 1.'},
        {key: 'Ex 3', exercise: 'To help you remember the pattern, pick a few random root notes and using pen and paper (and without noting the pattern), write out the notes in the minor pentatonic scale for each root note.'},
        {key: 'Ex 4', exercise: 'On a piano/keyboard/instrument, play through the minor pentatonic scale for each root note without referring to your notes. For this exercise you may play them in order, starting with the root note on C. *** Note: You may find it helpful to say the pattern out loud as you play though the notes.'},
        {key: 'Ex 5', exercise: 'On a piano/keyboard/instrument, pick a root note at random and play through the minor pentatonic scale, then play it an octave higher, then an octave lower, then play it backwards, then backwards an octave higher, then backwards an octave lower.'},
      ],
      whatNext: "You have now mastered the major and minor pentatonic scales. It is highly recommended that you continue to practice these exercises - or you own exercises - regularly to help build and retain muscle memory to play each of the  minor pentatonic scales from each root/starting note.",
      whatNext_2: "If you are ready to continue exploring scales, click the button below to navigate back to the main scales page.",
      nextSubject: "Scales"
  }

  const templateScale = {
    title: "Name Of scale",
    intro_1: "",
    intro_2: "",
    patternDescription: 'The scale is created using the following pattern of whole-steps (tones) and half-steps (semi-tones), starting from the root note (R):',
    pattern: "",
    example: "",
    result: "",
    resultScale: "",

    degrees: [
      {position: '1st', degree: 'Tonic'},
      {position: '2nd', degree: 'Supertonic'},
      {position: '3rd', degree: 'Mediant'},
      {position: '4th', degree: 'Subdominant'},
      {position: '5th', degree: 'Dominant'},
      {position: '6th', degree: 'Submediant'},
      {position: '7th', degree: 'Leading Tone'},
      {position: '8th', degree: 'Tonic'},
    ],

    positions: [
        {scale: '',  key: 'C',  img: require('../img/scales/nat_minor/c.png')},
        {scale: '', key: 'C#', img: require('../img/scales/nat_minor/csharp.png')},
        {scale: '',  key: 'D',  img: require('../img/scales/nat_minor/d.png')}, 
        {scale: '',  key: 'D#',  img: require('../img/scales/nat_minor/dsharp.png')}, 
        {scale: '',  key: 'E',  img: require('../img/scales/nat_minor/e.png')}, 
        {scale: '',  key: 'F',  img: require('../img/scales/nat_minor/f.png')}, 
        {scale: '',  key: 'F#',  img: require('../img/scales/nat_minor/fsharp.png')},
        {scale: '',  key: 'G',  img: require('../img/scales/nat_minor/g.png')}, 
        {scale: '',  key: 'G#',  img: require('../img/scales/nat_minor/gsharp.png')}, 
        {scale: '',  key: 'A',  img: require('../img/scales/nat_minor/a.png')}, 
        {scale: '',  key: 'A#',  img: require('../img/scales/nat_minor/asharp.png')}, 
        {scale: '',  key: 'B',  img: require('../img/scales/nat_minor/b.png')},  
      ],

      exercises: [
        {key: 'Ex 1', exercise: ''},
        {key: 'Ex 2', exercise: ''},
        {key: 'Ex 3', exercise: ''},
        {key: 'Ex 4', exercise: ''},
        {key: 'Ex 5', exercise: ''},
      ],
      whatNext: "",
      whatNext_2: "",
      nextSubject: "Scales"
  }


export {majorScale, natMinorScale, harMinorScale, melMinorScale, majorPentatonicScale, minorPentatonicScale};


