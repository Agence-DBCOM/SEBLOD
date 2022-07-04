<?php
defined( '_JEXEC' ) or die;
?>
<div class="row-pane"><div class="row">
	<div class="col-12 col-lg-8">
		<fieldset class="options-form">
			<legend>
				<?php echo JText::_( 'COM_CCK_OPTIONS' ); ?>
			</legend>
			<?php
			echo $displayData['fields']['location'];
			echo $displayData['fields']['quick_nav'];
			?>
		</fieldset>
	</div>
	<div class="col-12 col-lg-4">
		<fieldset class="options-form">
			<legend>
				<?php echo JText::_( 'COM_CCK_DEVELOPMENT' ); ?>
			</legend>
			<?php
			echo $displayData['fields']['alias'];
			echo $displayData['fields']['css_core'];
			?>
		</fieldset>
	</div>
</div></div>