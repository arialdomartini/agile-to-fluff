String.prototype.fuffify = function () {
    var translations = [
		['agile', 'fluff'],
		['Agile', 'Fluff'],
		['agility', 'fluffity'],
		['Agility', 'Fluffity'],
		['AGILITY', 'FLUFFITY'],

		['scrum', 'fluff'],
		['Scrum', 'Fluff'],
		['SCRUM', 'FLUFF'],

		['Kanban', 'Fluff'],
		['kanban', 'fluff'],
		['KANBAN', 'FLUFF']
	];
	
	var v = this;
	for(var key in translations)
		v = v.replace(new RegExp( translations[key][0], 'g' ), translations[key][1] );
    return v;
};

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:
		case 9:
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			node.nodeValue = node.nodeValue.fuffify();
			break;
	}
}


walk(document.body);
