interface IShift {
      start: string;
      end: string;
    }
    
    const usershifts = <IShift[]>[
    	{
    		start: '0600',
    		end: '1000'
    	},
    	{
    		start: '1600',
    		end: '2000'
    	}
    ];
    
    const globalShiftList = <IShift[]>[
    	{
    		start: '1200',
    		end: '2359'
    	},
    	{
    		start: '0000',
    		end: '0600'
    	} ,
    	{
    		start: '1000',
    		end: '1500'
    	} ,
    	{
    		start: '1200',
    		end: '1600'
    	}
    ];
	
	let validShifts = [];
		
	globalShiftList.forEach( (gshift) => {
		var isValid = false;
		usershifts.forEach( (ushift) => {
			
			if( (+gshift.start <=  +ushift.end &&  +gshift.end <= +ushift.start) 
			|| (+gshift.start >=  +ushift.end &&  +gshift.end <= +ushift.start) 
			) {
				isValid = true;
			}  
			//else {
			//	console.log( gshift.start + "== " + gshift.end);
			//}
		});
		
		if(isValid) {
			validShifts.push(gshift);
		}
		
	});
	
for( let shift of validShifts) {
	console.log( shift.start + "--> " + shift.end);
}
