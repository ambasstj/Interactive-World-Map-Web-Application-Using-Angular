
   document.addEventListener('DOMContentLoaded', (event) => {
      const svgContainer = document.getElementById('WorldView');


      svgContainer.addEventListener('mouseenter', (event) => {
         const targetPath = event.target as SVGElement;

         if (targetPath.tagName === 'path') {
            targetPath.setAttribute('fill','yellow');
         }
      });

      svgContainer.addEventListener('mouseleave', (event) => {
         const targetPath = event.target as SVGElement;
         if (targetPath.tagName === 'path') {
            targetPath.setAttribute('fill','none')
        } 
    });
})
