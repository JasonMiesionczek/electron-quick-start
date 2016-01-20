export var lambRoutes = [
    { route: ['', 'welcome'], name: 'welcome', moduleId: './app/welcome', nav: false, title: 'Main Menu'},
    { route: 'flower1', name: 'flower1', moduleId: './app/programs/lambdoma/flower1/flower1', nav: true, title: '1. Frequencies relative to angles + lengths' },
    { route: 'flower2', name: 'flower2', moduleId: './app/programs/lambdoma/flower2/flower2', nav: true, title: '2. Angles relating to ratios' },
    { route: 'flower3', name: 'flower3', moduleId: './app/programs/lambdoma/flower3/flower3', nav: true, title: '3. Frequencies relative to given ratios for base of 256'},
    { route: 'flower4', name: 'flower4', moduleId: './app/programs/lambdoma/flower4/flower4', nav: true, title: '4. Frequencies relative to given angles for given base freqs' },
    { route: 'flower6', name: 'flower6', moduleId: './app/programs/lambdoma/flower6/flower6', nav: true, title: '6. Angles + Frequencies relative to given ratios for base of 256' },
    { route: 'flower7', name: 'flower7', moduleId: './app/programs/lambdoma/flower7/flower7', nav: true, title: '7. Angles + Frequencies relative to given ratios for chosen base' },
    { route: 'flower8', name: 'flower8', moduleId: './app/programs/waves/flower8/flower8', nav: false, title: '8. Waves intersecting at corners of triangle for given frequency'},
    { route: 'flower9', name: 'flower9', moduleId: './app/programs/waves/flower9/flower9', nav: false, title: '9. Waves intersecting at corners of rectangle for given frequency'},
    { route: 'flower10', name: 'flower10', moduleId: './app/programs/waves/flower10/flower10', nav: false, title: '10. Waves intersecting at corners of n-sided polygon for given frequency'},
    { route: 'flower11', name: 'flower11', moduleId: './app/programs/waves/flower11/flower11', nav: false, title: '11. Waves intersecting at mid-side of n-sided polygon for given frequency'},
    { route: 'flower12', name: 'flower12', moduleId: './app/programs/waves/flower12/flower12', nav: false, title: '12. Waves intersecting at mid-side of triangle for given frequency'},
    { route: 'flower13', name: 'flower13', moduleId: './app/programs/waves/flower13/flower13', nav: false, title: '13. Waves intersecting at mid-side of rectangle for given frequency'},
    { route: 'flower14', name: 'flower14', moduleId: './app/programs/waves/flower14/flower14', nav: false, title: '14. Waves intersecting at corners of triangle for three given frequencies'},
    { route: 'flower15', name: 'flower15', moduleId: './app/programs/waves/flower15/flower15', nav: false, title: '15. Waves intersecting at corners of rectangle for four given frequencies'},
    { route: 'flower16', name: 'flower16', moduleId: './app/programs/waves/flower16/flower16', nav: false, title: '16. Waves intersecting at mid-side of rectangle for four given frequencies'},
    { route: 'flower17', name: 'flower17', moduleId: './app/programs/waves/flower17/flower17', nav: false, title: '17. Waves intersecting at mid-side of triangle for three given frequencies'},
    { route: 'flower18', name: 'flower18', moduleId: './app/programs/waves/flower18/flower18', nav: false, title: '18. Waves intersecting when generated a one corner of rectangle, reflect off wall twice'},
    { route: 'flower19', name: 'flower19', moduleId: './app/programs/waves/flower19/flower19', nav: false, title: '19. Waves intersecting when generated at the corners of rectangle, reflect off wall twice'},
    { route: 'flower20', name: 'flower20', moduleId: './app/programs/waves/flower20/flower20', nav: false, title: '20. Moon orbits around earth orbiting around the sun'},
    { route: 'flower21', name: 'flower21', moduleId: './app/programs/waves/flower21/flower21', nav: false, title: '21. Waves intersecting when generated at the corners of rectangle, reflect off wall once'},
    { route: 'flower22', name: 'flower22', moduleId: './app/programs/waves/flower22/flower22', nav: false, title: '22. Waves intersecting when generated at one point in a rectangle, reflect off wall once'},
    { route: 'flower23', name: 'flower23', moduleId: './app/programs/waves/flower23/flower23', nav: false, title: '23. Waves intersecting when generated at mid-side of rectangle, reflect off wall once'},
    { route: 'flower24', name: 'flower24', moduleId: './app/programs/stereoPairs/flower24/flower24', nav: false, title: '24. Generates stereo pairs representing 3D lissajou patterns'},
    { route: 'flower25', name: 'flower25', moduleId: './app/programs/stereoPairs/flower25/flower25', nav: false, title: '25. Generates stereo pairs representing 3D globe'},
    { route: 'flower27', name: 'flower27', moduleId: './app/programs/stereoPairs/flower27/flower27', nav: false, title: '27. Generates stereo pairs representing 3D wire sculpture cube'},
    { route: 'flower28', name: 'flower28', moduleId: './app/programs/stereoPairs/flower28/flower28', nav: false, title: '28. Generates stereo pairs representing 3D wire sculpture cube with tetrahedron inside'},
    { route: 'flower29', name: 'flower29', moduleId: './app/programs/stereoPairs/flower29/flower29', nav: false, title: '29. Generates stereo pairs representing 3D wire sculpture cube with octahedron inside'},
    { route: 'flower30', name: 'flower30', moduleId: './app/programs/stereoPairs/flower30/flower30', nav: false, title: '30. Generates stereo pairs representing 3D wire sculpture cube with dodecahedron outside'},
    { route: 'flower31', name: 'flower31', moduleId: './app/programs/stereoPairs/flower31/flower31', nav: false, title: '31. Generates blinking stereo pairs, effect of moving 3D wire sculpture cube with dodecahedron outside'},
    { route: 'flower32', name: 'flower32', moduleId: './app/programs/stereoPairs/flower32/flower32', nav: false, title: '32. Generates blinking stereo pairs, effect of rotating 3D wire sculpture cube with dodecahedron outside'},
    { route: 'flower33', name: 'flower33', moduleId: './app/programs/supermind/flower33/flower33', nav: false, title: '33. Supermind Evaluation'},
], waveRoutes =
    { group1: [
        { route: 'flower8', image: 'flower8.png', name: 'flower8', moduleId: './app/library/flower8/flower8', nav: true, title: '8. Waves intersecting at corners of triangle for given frequency'},
        { route: 'flower9', image: 'flower9.png', name: 'flower9', moduleId: './app/library/flower9/flower9', nav: true, title: '9. Waves intersecting at corners of rectangle for given frequency'},
        { route: 'flower10', image: 'flower10.png', name: 'flower10', moduleId: './app/library/flower10/flower10', nav: true, title: '10. Waves intersecting at corners of n-sided polygon for given frequency'},
        { route: 'flower11', image: 'flower11.png', name: 'flower11', moduleId: './app/library/flower11/flower11', nav: true, title: '11. Waves intersecting at mid-side of n-sided polygon for given frequency'},
        { route: 'flower12', image: 'flower12.png', name: 'flower12', moduleId: './app/library/flower12/flower12', nav: true, title: '12. Waves intersecting at mid-side of triangle for given frequency'},
        { route: 'flower13', image: 'flower13.png', name: 'flower13', moduleId: './app/library/flower13/flower13', nav: true, title: '13. Waves intersecting at mid-side of rectangle for given frequency'}
    ],
    group2: [
        { route: 'flower14', image: 'flower14.png', name: 'flower14', moduleId: './app/library/flower14/flower14', nav: true, title: '14. Waves intersecting at corners of triangle for three given frequencies'},
        { route: 'flower15', image: 'flower15.png', name: 'flower15', moduleId: './app/library/flower15/flower15', nav: true, title: '15. Waves intersecting at corners of rectangle for four given frequencies'},
        { route: 'flower16', image: 'flower16.png', name: 'flower16', moduleId: './app/library/flower16/flower16', nav: true, title: '16. Waves intersecting at mid-side of rectangle for four given frequencies'},
        { route: 'flower17', image: 'flower17.png', name: 'flower17', moduleId: './app/library/flower17/flower17', nav: true, title: '17. Waves intersecting at mid-side of triangle for three given frequencies'},
        { route: 'flower18', image: 'flower18.png', name: 'flower18', moduleId: './app/library/flower18/flower18', nav: true, title: '18. Waves intersecting when generated a one corner of rectangle, reflect off wall twice'},
        { route: 'flower19', image: 'flower19.png', name: 'flower19', moduleId: './app/library/flower19/flower19', nav: true, title: '19. Waves intersecting when generated at the corners of rectangle, reflect off wall twice'},
    ],
    group3: [
        { route: 'flower20', image: 'flower20.png', name: 'flower20', moduleId: './app/library/flower20/flower20', nav: true, title: '20. Moon orbits around earth orbiting around the sun'},
        { route: 'flower21', image: 'flower21.png', name: 'flower21', moduleId: './app/library/flower21/flower21', nav: true, title: '21. Waves intersecting when generated at the corners of rectangle, reflect off wall once'},
        { route: 'flower22', image: 'flower22.png', name: 'flower22', moduleId: './app/library/flower22/flower22', nav: true, title: '22. Waves intersecting when generated at one point in a rectangle, reflect off wall once'},
        { route: 'flower23', image: 'flower23.png', name: 'flower23', moduleId: './app/library/flower23/flower23', nav: true, title: '23. Waves intersecting when generated at mid-side of rectangle, reflect off wall once'},


    ],
    group4: [

    ]
}, stereoPairs = {
    group1: [
        { route: 'flower24', image: 'flower24.png', name: 'flower24', moduleId: './app/library/flower24/flower24', nav: true, title: '24. Generates stereo pairs representing 3D lissajou patterns'},
        { route: 'flower25', image: 'flower25.png', name: 'flower25', moduleId: './app/library/flower25/flower25', nav: true, title: '25. Generates stereo pairs representing 3D globe'},
        { route: 'flower27', image: 'flower27.png', name: 'flower27', moduleId: './app/library/flower27/flower27', nav: true, title: '27. Generates stereo pairs representing 3D wire sculpture cube'},
        { route: 'flower28', image: 'flower28.png', name: 'flower28', moduleId: './app/library/flower28/flower28', nav: true, title: '28. Generates stereo pairs representing 3D wire sculpture cube with tetrahedron inside'},
        { route: 'flower29', image: 'flower29.png', name: 'flower29', moduleId: './app/library/flower29/flower29', nav: true, title: '29. Generates stereo pairs representing 3D wire sculpture cube with octahedron inside'},
        { route: 'flower30', image: 'flower30.png', name: 'flower30', moduleId: './app/library/flower30/flower30', nav: true, title: '30. Generates stereo pairs representing 3D wire sculpture cube with dodecahedron outside'},
    ],
    group2: [
        { route: 'flower31', image: 'flower30.png', name: 'flower31', moduleId: './app/library/flower31/flower31', nav: true, title: '31. Generates blinking stereo pairs, effect of moving 3D wire sculpture cube with dodecahedron outside'},
        { route: 'flower32', image: 'flower32.png', name: 'flower32', moduleId: './app/library/flower32/flower32', nav: true, title: '32. Generates blinking stereo pairs, effect of rotating 3D wire sculpture cube with dodecahedron outside'},
        { route: 'flower33', image: 'flower33.png', name: 'flower33', moduleId: './app/programs/supermind/flower33/flower33', nav: true, title: '33. Supermind Evaluation'},
    ]
}
;