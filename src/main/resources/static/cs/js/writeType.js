/**
 * 
 */
$(function(){
	const url = "/cs/rest/ajaxWrite"
	
	$("#cate").change(function(){
		let optionValue = $(this).val();
		let selectType = $("#type");
		
		const jsonData = {
			"optionValue" : optionValue
		};
		console.log(jsonData);
		
		// cate가 바뀔 때 마다 type을 빈값으로 초기화 해주고
		// 그 뒤 append를 통해서 option을 추가해줌
		selectType.empty();
		selectType.append(
			$('<option>',{
				value: '',
                text: '2차 분류 선택',
                disabled: 'disabled',
                selected: 'selected'
			})
		);
		
		if(optionValue !== '0'){
			$.getJSON(url, jsonData, function(data){
				console.log("cate가 0이 아닐 때 type option 추가");
				console.log(data);
				
				$.each(data, function (index, type) {
					selectType.append(
						$('<option>',{
							value: type.type,
			                text: type.typeName,
						})
					); // appnd end
                }); // each end
			}); // ajax end
		} // if end
	}); // cate change end
});